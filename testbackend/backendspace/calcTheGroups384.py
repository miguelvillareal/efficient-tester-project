import math
import numpy as np

def get_number_of_arrays(n_samples, window):
    """
    Calculate the number of grids required for a given window size
    and number of samples
    """
    return math.ceil(n_samples / window)

def dimensional_reshape(sample, window):
    """
    Place samples into gridsZQ
    """
    # add zero padding to dimensions
    n_arrays = get_number_of_arrays(len(sample), window)
    sample.resize((window) * n_arrays, refcheck=False)
    return sample.reshape(n_arrays, window)

def get_number_of_stages(n, d):
    """
    Calculate number of stages base on S-Stage algorithm but
    constrain to be less than or equal to 3.
    """
    return min(3, math.ceil(np.log(n / d)))

def get_group_sizes(n, s, d):
    """
    Calculate the size of each group based on S-Stage algorithm using
    the number of samples (n), the number of stages (s), and the
    expected number of positive samples (s).
    """
    return [math.ceil((n / d) ** ((s - i) / s)) for i in range(1, s + 1)]

def trim_list(a):
    """
    For a two-dimensional array, remove the '' in the last array
    """
    a = a.tolist()
    temp = a[-1];
    result = []
    a.pop(-1)
    for tt in temp:
        if (tt != ''):
            result.append(tt)
    a.append(result)
    return a

def normalized_output(a):
    for temp in a:
        print(a)
    return

def dfs(char_list, group_size, result_dict,stage):
    """
    Traverse each stage through the dfs method
    """
    # stage = 1 end condition
    if group_size[0] == 1 or len(char_list[0]) == 0:
        result = trim_list(dimensional_reshape(char_list, 1))
        result_dict[str(stage - len(group_size))].append(result)
        return 0
    # dimensional_reshape
    result = trim_list(dimensional_reshape(char_list, 1))
    # Data from the same stage is added to a list
    result_dict[str(stage - len(group_size))].append(trim_list(dimensional_reshape(char_list, group_size[0])))
    # delete ''
    for temp in dimensional_reshape(char_list, group_size[0]):
        ttmp = []
        for i in temp:
            if (i != ''):
                ttmp.append(i)
        # dfs

        dfs(np.array(ttmp), group_size[1:], result_dict,stage)

def sample_group(n_samples, group_size, result_dict,stage):
    dfs(np.array(n_samples), group_size, result_dict,stage)
    return result_dict

def sample_main(n_test,positive_rate):
    # create list like ['A1','B1','C1',...]
    samples = []
    char_list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I','J','K','l','M','N','O','P']
    for j in range(1, 25):
        for i in char_list:
            samples.append(i + str(j))
    # if n_test > 96
    num = int(n_test/len(samples))
    result_samples = []
    for i in range(num):
        result_samples = result_samples + samples;
    result_samples = result_samples + samples[0:n_test%(len(samples))]
    # create result dict
    result_dict = {}
    # get stage
    stage = get_number_of_stages(n_test, positive_rate)
    # init dict
    for i in range(0, stage):
        result_dict[str(i)] = []
    result_dict = sample_group(np.array(result_samples), get_group_sizes(n_test, stage, positive_rate), result_dict,stage)
    result_dict = fixGroups(result_dict)
    return result_dict



def fixGroups (dictToFix):
    keys = list(dictToFix.keys())

    for dictIndex in range(len(keys)):
        currentDictItem = dictToFix[str(dictIndex)]

        for outer in range(len(currentDictItem)):
            for inner in range(len(currentDictItem[outer])):
                for individualItem in range(len(currentDictItem[outer][inner])):
                    if currentDictItem[outer][inner][individualItem] == 'P24':
                        beforeBreak = currentDictItem[outer][inner][:individualItem+1]
                        afterBreak = currentDictItem[outer][inner][individualItem+1:]
                        currentDictItem[outer][inner] = beforeBreak
                        afterBreak = np.atleast_2d(afterBreak).tolist()


                        if str(afterBreak) != '[[]]':
                            currentDictItem[outer][inner+1:inner+1] = afterBreak
                            #print(currentDictItem[outer][inner+1:])
                        break



        dictToFix[str(dictIndex)] = currentDictItem

    return dictToFix