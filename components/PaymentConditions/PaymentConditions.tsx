import { getPaymentConditionsData } from "@/lib/paymentConditions";
import { useLocale } from "next-intl";

function PaymentConditions() {
  const localeActive = useLocale();
  const PaymentConditionsData = getPaymentConditionsData(localeActive);

  return (
    <div>
      <div className="flex flex-col gap-5 mb-5">
        {[
          PaymentConditionsData.data[0].des,
          PaymentConditionsData.data[0].des2,
          PaymentConditionsData.data[0].des3,
          PaymentConditionsData.data[0].des4,
          PaymentConditionsData.data[0].des5,
          PaymentConditionsData.data[0].des6,
        ].filter(Boolean).map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
      <div>
        <p className="font-titleBold">{PaymentConditionsData.data[0].title2}</p>
        <ul>
          <li>Cash (upon arrival) </li>
          <li>Bank Transfer (Internet Banking)</li>
          <li>Paypal</li>
          <li>Credit and Debit Cards (Visa, MasterCard ...)</li>
        </ul>
      </div>
    </div>
  );
}

export default PaymentConditions;
