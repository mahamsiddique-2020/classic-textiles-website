import { MessageCircle } from "lucide-react";
import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {

const message = encodeURIComponent(
"Hello! I would like to inquire about your textile products. Could you please share your catalogue, pricing, MOQ and customization options?"
);

return (

<a
href={`https://wa.me/923008650916?text=${message}`}
target="_blank"
rel="noopener noreferrer"
className="floating-whatsapp"
title="Chat on WhatsApp"
aria-label="WhatsApp"
>

<MessageCircle size={30} />

<span className="tooltip">
Chat with us
</span>

</a>

);

}