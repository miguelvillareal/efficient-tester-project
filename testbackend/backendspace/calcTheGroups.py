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
    if group_size[0] == 1 or len(char_list[0]) == 0:
        result = trim_list(dimensional_reshape(char_list, 1))
        result_dict[str(stage - len(group_size))].append(result)
        return 0
    result = trim_list(dimensional_reshape(char_list, 1))
    result_dict[str(stage - len(group_size))].append(trim_list(dimensional_reshape(char_list, group_size[0])))
    for temp in dimensional_reshape(char_list, group_size[0]):
        ttmp = []
        for i in temp:
            if (i != ''):
                ttmp.append(i)
        dfs(np.array(ttmp), group_size[1:], result_dict,stage)


def sample_group(n_samples, group_size, result_dict,stage):
    dfs(np.array(n_samples), group_size, result_dict,stage)
    return result_dict


def sample_main(n_test,positive_rate):
    samples = []
    stage = get_number_of_stages(n_test, positive_rate)
    char_list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    group_sizes = get_group_sizes(n_test, stage, positive_rate)
    print(group_sizes)
    horizontalGroups = [3, 6, 12, 18, 24]
    count = 1
    if (group_sizes[0] in horizontalGroups ):
        for i in char_list:
            for j in range(1, 13):
                samples.append(i + str(j))
    else:
        for j in range(1, 13):
            for i in char_list:
                samples.append(i + str(j))
    result_dict = {}


    for i in range(0, stage):
        result_dict[str(i)] = []
    result_dict = sample_group(np.array(samples), group_sizes, result_dict, stage)
    return result_dict
