import React from "react";
import paypal from "paypal-checkout";

const ButtonPaypal = ({ order }) => {
  const paypalConf = {
    currency: "CAD",
    env: "sandbox",
    client: {
      sandbox:
        "AXfyu-OdOP3f-ynmKiWrxUr8qYWm8ireUNH8ylgBftqwAuG6Qrd5rgJ6vrUIb667eiMeJThuN30-0BCq",
      production: "",
    },
    style: {
      label: "pay",
      size: "medium",
      shape: "rect",
      color: "gold",
    },
  };

  const PaypalButton = paypal.Button.driver("react", {
    React,
    ReactDOM,
  });

  //funcion para la transaccion
  const payment = (data, actions) => {
    const payment = {
      transactions: [
        {
          ammount: {
            total: order.total,
            currency: paypalConf.currency,
          },
          description: "Compra en Test App",
          custom: order.customer || "",
          item_list: {
            items: order.items,
          },
        },
      ],
      note_to_payer: "Contactanos para cualquier duda.",
    };
    return actions.payment.create({ payment });
  };

  //funcion on authorize
  const onAuthorize = (data, actions) => {
    return actions.payment
      .execute()
      .then((response) => {
        console.log("respuesta de paypal: ", response);
        alert(`El pago se ha realizado correctament, ID: ${response.id}`);
      })
      .catch((error) => {
        console.log("error en el pago: ", error);
        alert("Ocurrio un error al procesar el pago con Paypal");
      });
  };

  //funcion onError
  const onError = (error) => {
    console.log(error);
    alert("El pago no fue realizado, vuelva a intentarlo.");
  };

  //funcion onCancel
  const onCancel = (data, actions) => {
    alert("El pago fue cancelado, es posible que haya cancelado el proceso.");
  };

  return (
    <PaypalButton
      env={paypalConf.env}
      client={paypalConf.client}
      payment={(data, actions) => payment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onError={(data, actions) => onError(data, actions)}
      onCancel={(error) => onCancel(error)}
      style={paypalConf.style}
      commit
      locale="es_MX"
    />
  );
};

export default ButtonPaypal;
