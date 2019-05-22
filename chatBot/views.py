from django.shortcuts import render

# Create your views here.
import json
from django.http import JsonResponse
from chatBot import models
def login(request):
    if request.method == 'POST':
        userinfo = []
        ret = {'code': 1000, 'msg': '成功登陆'}
        try:
            #通用方法来获取API中返回的数据，并将其封装成安全的形式
            datalist = request.body.decode('utf-8')
            data = json.loads(datalist)
            username = data['username']
            password = data['password']
            # user = request.POST.get('username')
            # pwd = request.POST.get('password')
            # a1=json({"username":user,"password":pwd})
            obj = models.UserInfo.objects.filter(username=username, password=password)
            if obj:
                for a in obj:
                    ret['role'] = a.role
                    if a.role == 'admin':
                        allobj = models.UserInfo.objects.all()
                        for b in allobj:
                            userinfo.append({
                                'username': b.username,
                                'tel': b.tel,
                                'role': b.role
                            })
                        ret['userdata'] = userinfo
                    else:
                        ret['userdata'] = []
            else:
                ret['code'] = 1001
                ret['msg'] = '用户名或密码错误'
        except Exception as e:
            ret['code'] = 1002
            ret['msg'] = '请求异常'
        return JsonResponse(ret)
