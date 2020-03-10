using CSX_Server.Common;

namespace Integration.Model{
    public class Notification
    {
        private Channel _channel;
        public string participant_key { get; set; }
        public string message { get; set; }
        public string phone { get; set; }
        public Channel channel { get => _channel; set => _channel = value; }
        public decimal fk_survey { get; set; }
    }

    public class NotificationChatBot{
        public string phone { get; set; }
        public string message { get; set; }
    }
}