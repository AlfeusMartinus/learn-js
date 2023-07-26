// overriding di dalam OOP memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenernya sudah didefinisikan pada superclass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class WhatsappService extends MailService {
    // overriding constructor
    constructor(sender, isBussines) {
        super(sender);
        this.isBussines = isBussines;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`) // bisa dengan cara ini

        super.sendMessage(message,receiver); // atau dengan cara ini
        console.log('message sent via whatsapp');
    }
}

const whatsapp = new WhatsappService('0881023410516', true);
console.log(whatsapp);