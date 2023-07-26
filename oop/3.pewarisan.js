// membuat 2 objek yang sama-sama dapat mengirim pesan
class WhatsapService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.message} sent to ${this.receiver}`);
  }

  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

class EmailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

// kedua objek diatas memiliki duplikasi kode, padahal kita dapat menggunakan satu class saja
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }

  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}
const whatsapp = new MailService("+62881023410516");
const email = new MailService("feusmartinus@gmail.com");
// cara ini tetap menimbulkan masalah karena pada wa dan email sama-sama memiliki fitur yang sama

// OOP memecahkan masalah ini dengan pewarisan / inheritance

// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(sender, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

// warisi sifat superclass ke subclass menggunakan extend
class WhatsapService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

// Pewarisan tanpa ES6 Class
function MailService(sender) {
  this.sender = sender;
}

MailService.prototype.sendMessage = function (message, receiver) {
  console.log(`${this.sender} sent ${message} to ${receiver}`);
};

function WhatsapService(sender) {
  MailService.call(this, sender);
}
// prototype inheritance
WhatsapService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;
WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver);
  }
};

function EmailService(sender) {
  MailService.call(this, sender);
}

// Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;

EmailService.prototype.sendDelayedMessage = function (
  message,
  receiver,
  delay
) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
};

const Whatsapp = new WhatsAppService("+6281234567890");
const Email = new EmailService("dimas@dicoding.com");
whatsapp.sendMessage("Hello", "+6289876543210");
whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
email.sendMessage("Hello", "john@doe.com");
email.sendDelayedMessage("Hello", "john@doe.com", 3000);