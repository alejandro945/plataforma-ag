import { FileIcon } from "react-file-icon";

export function stringFormat(message) {
    return message.charAt(0).toUpperCase() + message.slice(1);
}
export function upperFormat(value) {
    return (typeof value === 'string' ? value.toUpperCase() : value);
}
export function getAvatar(firstName,lastName) {
    return (firstName && lastName) ? `${firstName[0]}${lastName[0]}` : "";
}
<FileIcon
    size={24}
    color="#D14423"
    labelColor="#D14423"
    labelUppercase
    type="acrobat"
    glyphColor="rgba(255,255,255,0.4)"
    extension="pdf"
/>