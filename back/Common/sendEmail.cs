using MailKit.Net.Smtp;
using MimeKit;
using SendGrid;
using SendGrid.Helpers.Mail;
using CSX_Server.Models;
using Integration.Model;
using Pliq.Common;

namespace Authentication.Common
{
    public static class SendEmail
    {
        const string MAIL_ORGANIZATION =  "<sendgrid_email>";
        const string TOKEN_SENDGRID = "<sendgrid_key>";

        public static async void RecoveryPassword(Users user, string token){
            // Retrieve the API key from the environment variables. See the project README for more info about setting this up.
            var apiKey = "<SENDGRID_KEY>";

            var client = new SendGridClient(apiKey);

            // Send a Single Email using the Mail Helper
            var from = new EmailAddress("<email_refetente>", "<TITLE RETIP>");
            var subject = "Recuperação de Senha";
            var to = new EmailAddress(user.email, user.full_name);
            var plainTextContent = string.Format(@"{0},
<br/>
<br/>Sua solicitação para alterar sua senha de login foi processada com sucesso.
<br/>
<br/>A partir de agora, você poderá usar os novos detalhes para fazer login na sua área de cliente
<br/>
<br/>Sua nova senha é: <b>{1}</b>
<br/>
<br/>Equipe.",user.full_name, token);
            var htmlContent = string.Format(@"{0},
<br/>
<br/>Sua solicitação para alterar sua senha de login foi processada com sucesso.
<br/>
<br/>A partir de agora, você poderá usar os novos detalhes para fazer login na sua área de cliente em.
<br/>
<br/>Sua nova senha é: <b>{1}</b>
<br/>
<br/>Equipe.",user.full_name, token);
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);

            var response = await client.SendEmailAsync(msg);
        }


        public static async void Notification(Notification dados, Companies company){
            // Retrieve the API key from the environment variables. See the project README for more info about setting this up.
            //var apiKey = "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";//Environment.GetEnvironmentVariable("NAME_OF_THE_ENVIRONMENT_VARIABLE_FOR_YOUR_SENDGRID_KEY");

            var client = new SendGridClient(TOKEN_SENDGRID);

            // Send a Single Email using the Mail Helper
            string mail = string.Format("{0}@dominio", Helpers.RemoveSpecialCharacters(company.full_name.ToLower()));
            var from = new EmailAddress(mail, company.full_name);
            var subject = "Título";
            var to = new EmailAddress(dados.participant_key);
            //var plainTextContent = string.Format(dados.message);
            var plainTextContent = dados.message;
            //var htmlContent = string.Format(dados.message);
            var htmlContent = dados.message;
            
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);

            var response = await client.SendEmailAsync(msg);
        }
        public static async void WelcomeUser(Users user, Companies companie, string password)
        {
            // Retrieve the API key from the environment variables. See the project README for more info about setting this up.
            var apiKey = "<sendgrid_key>";//Environment.GetEnvironmentVariable("NAME_OF_THE_ENVIRONMENT_VARIABLE_FOR_YOUR_SENDGRID_KEY");

            var client = new SendGridClient(apiKey);

            // Send a Single Email using the Mail Helper
            var from = new EmailAddress("<email@provedor.com>", "<Subject>");
            var subject = "<Título>";
            var to = new EmailAddress(user.email, user.full_name);
            var to_organization = new EmailAddress(MAIL_ORGANIZATION, user.full_name + " " + companie.full_name);

            var plainTextContent = string.Format(@"Olá <b>{0}</b>,<br/><br/>
                                    Você está recebendo esse email porque você 
                                    se cadastrou na plataforma.
                                    Sua senha informada foi: <b>{1}</b>
                                    <br/>
                                    <br/>Equipe.", user.full_name, password, companie.full_name);

            var htmlContent = string.Format(@"Olá <b>{0}</b>,<br/><br/>
                                    Você está recebendo esse email porque você 
                                    se cadastrou na plataforma.
                                    Sua senha informada foi: <b>{1}</b>
                                    <br/>
                                    <br/>Equipe.", user.full_name, password, companie.full_name);

            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);

            var response = await client.SendEmailAsync(msg);

        }


    }
}