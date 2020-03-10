using System;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.IO;

public static class SecurityBusiness{

    public static decimal IdUser(this HttpContext httpContext){
        try{
            if(httpContext.User == null)
                return 0;

            return Convert.ToDecimal(httpContext.User.Claims.Single(x => x.Type == "ID").Value);
        }catch{
            return 0;
        }

    }

    public static decimal IdCompany(this HttpContext httpContext){
        try{
        if(httpContext.User == null)
            return 0;

        return Convert.ToDecimal(httpContext.User.Claims.Single(x => x.Type == "ID_COMPANY").Value);
        }catch{
            return 0;
        }
    }

    public static String GetIP(this HttpContext httpContext)
    {
        String ip = httpContext.Connection.RemoteIpAddress.ToString();
        return ip;
    }

    public static String PathInfo(this HttpContext httpContext)
    {
        String path = httpContext.Request.Path.ToString();
        return path;
    }

    public static String Method(this HttpContext httpContext)
    {
        String method = httpContext.Request.Method.ToString();
        return method;
    }

    public static String StatusCode(this HttpContext httpContext)
    {
        String statusCode = httpContext.Response.StatusCode.ToString();
        return statusCode;
    }
    public static String Headers(this HttpContext httpContext)
    {
        string headers = string.Empty;
        foreach (var header in httpContext.Request.Headers)
        {
            headers += string.Format("{0}: {1};", header.Key, string.Join(",", header.Value));
        }
        return headers;
    }

    public static string Body(this HttpContext httpContext)
    {
        var bodyStream = new StreamReader(httpContext.Request.Body);
        bodyStream.BaseStream.Seek(0, SeekOrigin.Begin);
        var bodyText = bodyStream.ReadToEnd();
        return bodyText;
    }


}