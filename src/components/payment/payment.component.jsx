import React from "react";
import "./payment.styles.css";

const submitPayment = (event) => {
  event.preventDefault();
  // pay(this);
  return false;
};

const Payment = () => {
  return (
    <>
      <div>Payment</div>
      <form name="TinkoffPayForm" onSubmit={submitPayment}>
        <input
          className="tinkoffPayRow"
          type="hidden"
          name="terminalkey"
          value="TinkoffBankTest"
        />
        <input
          className="tinkoffPayRow"
          type="hidden"
          name="frame"
          value="true"
        />
        <input
          className="tinkoffPayRow"
          type="hidden"
          name="language"
          value="ru"
        />
        <input
          className="tinkoffPayRow"
          type="hidden"
          name="reccurentPayment"
          value="false"
        />
        <input
          className="tinkoffPayRow"
          type="hidden"
          name="customerKey"
          value=""
        />
        <input
          className="tinkoffPayRow"
          type="text"
          placeholder="Сумма заказа"
          name="amount"
          required
        />
        <input
          className="tinkoffPayRow"
          type="text"
          placeholder="Номер заказа"
          name="order"
        />
        <input
          className="tinkoffPayRow"
          type="text"
          placeholder="Описание заказа"
          name="description"
        />
        <input
          className="tinkoffPayRow"
          type="text"
          placeholder="ФИО плательщика"
          name="name"
        />
        <input
          className="tinkoffPayRow"
          type="text"
          placeholder="E-mail"
          name="email"
        />
        <input
          className="tinkoffPayRow"
          type="text"
          placeholder="Контактный телефон"
          name="phone"
        />
        <input className="tinkoffPayRow" type="submit" value="Оплатить" />
      </form>
    </>
  );
};

export default Payment;
