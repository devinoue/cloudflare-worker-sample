export const sendMail = async function (
  awsApiUrl: string,
  mailMassage: string,
  mailBody?: string
) {
  let tmpMailBody = "";
  if (mailBody) {
    tmpMailBody = mailBody;
  } else {
    tmpMailBody = mailMassage;
  }
  const url = encodeURI(
    `${awsApiUrl}?mailSubject=${mailMassage}&mailMessage=${tmpMailBody}`
  );
  await fetch(url);
};
