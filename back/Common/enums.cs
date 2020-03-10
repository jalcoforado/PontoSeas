namespace CSX_Server.Common
{
    public enum Channel{
        WhatsApp,
        Email,
        SMS,
        WebSite,
        Chatbot,
        Erro
    }

    public enum StatusMessage{
        Pending,
        Error,
        Sent,
        Viewed,
        Opened,
        Answered
    }
    
    public enum TypeContact{
        Company,
        Person
    }


    public enum TypeNPS{
        Detractor,
        Neutral,
        Promoter
    }
}