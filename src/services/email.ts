
export const sendEmail = async (type: string, email: string) => {
    return `${type.toUpperCase()} email successfully sent to ${email}`
};
