using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution {
    static int equalizeArray(int[] arr) {
        Dictionary<int, int> hashMap = new Dictionary<int, int>();
        for (int i = 0; i < arr.Length; i++)
        {
            if (hashMap.ContainsKey(arr[i]))
                hashMap[arr[i]]++;
            else
                hashMap.Add(arr[i], 1);
        }

        int maxFrequency = hashMap.Values.Max();
        return (arr.Length - maxFrequency);
    }

}
