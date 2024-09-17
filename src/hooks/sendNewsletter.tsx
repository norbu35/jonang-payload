import { CollectionAfterChangeHook } from "payload/types";
import { newsletter } from "../templates/Newsletter";
import payload from "payload";

const sendNewsletter: CollectionAfterChangeHook = async ({ doc }) => {
  await payload.sendEmail({
    to: "test@test.com",
    from: "Jonang Newsletter",
    subject: "Test Newsletter",
    html: newsletter(doc),
  });
};

export { sendNewsletter };
