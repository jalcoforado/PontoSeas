using System.Text;
using PhoneNumbers;

namespace Pliq.Common
{
    public static class Helpers
    {
        public static string CheckPhone(string phone)
        {
            string result = null;
            long number;
            if (long.TryParse(phone, out number))
            {
                if ((phone.StartsWith('1') && phone.Length == 11) || (phone.StartsWith("55") && phone.Length == 13))
                    result = phone;
                else if (phone.Length == 10)
                    result = "55" + phone.Insert(2, "9");
                else if (phone.Length == 11)
                    result = "55" + phone;
                else if (phone.StartsWith("55") && phone.Length == 12)
                    result = phone.Insert(5, "9");
            }
            return result;
        }

        public static string CheckPhoneRemoveCharacter(string phone)
        {
            string result = null;
            if(!string.IsNullOrEmpty(phone))
            {
                result = phone;
                result = result.Replace("(", "");
                result = result.Replace(")", "");
                result = result.Replace("-", "");
                result = result.Replace(" ", "");
            }
            return result;
        }

        public static string HtmlToWhatsApp(string result){
            if(string.IsNullOrEmpty(result))
                return result;
                
            result = result.Replace("<br>","\n");
            result = result.Replace("<p>", "");
            result = result.Replace("</p>", "\n");
            result = result.Replace("<strong>", "*");
            result = result.Replace("</strong>", "*");
            result = result.Replace("<em>", "_");
            result = result.Replace("</em>", "_");
            result = result.Replace("<s>", "~");
            result = result.Replace("</s>", "~");
            return result;
        }

        public static bool IsValidEmail(string email)
        {
            try {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch {
                return false;
            }
        }

        public static bool IsValidPhone(string phone, string countryCode)
        {
            try{
                var _phoneUtil = PhoneNumberUtil.GetInstance();
                PhoneNumber phoneNumber = _phoneUtil.Parse(phone,
                countryCode);
                return _phoneUtil.IsValidNumberForRegion(phoneNumber, countryCode);
            }
            catch{
                return false;
            }        
        }
        
        public static string FormatPhone(string phone, string countryCode)
        {
            try{
                var _phoneUtil = PhoneNumberUtil.GetInstance();
                PhoneNumber phoneNumber = _phoneUtil.Parse(phone,
                countryCode);
                var valid = _phoneUtil.IsValidNumberForRegion(phoneNumber, countryCode);
                return valid ? phoneNumber.NationalNumber.ToString() : phone;
            }
            catch{
                return phone;
            }        
        }

        public static string RemoveSpecialCharacters(this string str) {
            StringBuilder sb = new StringBuilder();
            foreach (char c in str) {
                if ((c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || c == '.' || c == '_') {
                    sb.Append(c);
                }
            }
            return sb.ToString();
        }
    }
}
