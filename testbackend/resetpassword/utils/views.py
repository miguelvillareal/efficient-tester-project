from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.template import loader
from testbackend.settings import SENDGRID_API_KEY
from backendspace.models import User
from django.http import HttpResponse
import sendgrid
from django.views.decorators.csrf import csrf_exempt
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail,Email,Content,To
from .forms import SetPasswordForm
from django.views.generic import *
import json
from django.contrib import messages
from django.shortcuts import render


def reset_password(user, request):
    print(user.id)
    c = {
        'email': user.email,
        'domain': request.META['HTTP_HOST'],
        'site_name': 'testbackend',
        'uid': user.id,
        'user': user,
        'token': default_token_generator.make_token(user),
        'protocol': 'http',
    }
    #subject_template_name = 'registration/password_reset_subject.txt'
    email_template_name = 'registration/password_reset_email.html'
    subject = "Test 123"
    # Email subject *must not* contain newlines
    #subject = ''.join(subject.splitlines())
    #print("got here")
    email = loader.render_to_string(email_template_name, c)
    #print("got here 2")
    try:
        sg = sendgrid.SendGridAPIClient('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')
        to_email = To(user.email)
        #print("I AM HERE1")
        from_email = Email("efficienttester1@gmail.com")
        #print("I AM HERE2")
        content = Content('text/html', email)
        #print("I AM HERE3")
        sgmessage = Mail(from_email, to_email, subject, content)
        #print("I AM HERE4")
        mail_json = sgmessage.get()
        #print("I AM HERE5")
        #print(message.get())
        sg.client.mail.send.post(request_body=mail_json)
        #print("I AM HERE6")

    except Exception as e:
        print(e)
        print(e.body)

class PasswordResetConfirmView(FormView):
    template_name = "account/pwdoublie.html"
    success_url = 'http://localhost:8100/login'
    form_class = SetPasswordForm
    def post(self, request, uidb64=None, token=None, *arg, **kwargs):
        """
        View that checks the hash in a password reset link and presents a
        form for entering a new password.
        """
        form = self.form_class(request.POST)
        #print(uidb64)
        print(request.POST)
        assert uidb64 is not None and token is not None  # checked by URLconf
        try:
            uid = uidb64
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist) as e:
            user = None
            print(e)
        if user is not None and default_token_generator.check_token(user, token):
            if form.is_valid():
                new_password = form.cleaned_data['confirmation']
                from  django.contrib.auth.hashers import make_password
                user.password = make_password(new_password)
                user.save()
                messages.success(request, 'Your password has been modified')
                return self.form_valid(form)
            else:
                print(form.errors)
                messages.error(request, form.errors)
                return self.form_invalid(form)
        else:
            messages.error(
                request, 'This link has expired.')
            return self.form_invalid(form)

@csrf_exempt
def sendPasswordLink(request):
    #print(request)
    #print(request.method)
    if request.method == "POST":
        #print(json.loads(list(request.POST.keys())[0])['email'])
        data = json.loads(list(request.POST.keys())[0])['email']
        #print(data)
        associated_users = User.objects.filter(email=data)
        #print(associated_users)
        try:
         if associated_users.exists():
                for user in associated_users:
                    reset_password(user, request)
                return HttpResponse(status=200)
        except Exception as e:
                print(e)
        return HttpResponse(status=404)
    else:
        return HttpResponse(status=404)

#def pwdenvoye(request):
    #return render(request,'account/pwdmodifie.html',{})
