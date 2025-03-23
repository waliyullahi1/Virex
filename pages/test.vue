<template>
  <div class="payment-container">
    <button @click="makePayment" class="payment-button">Pay with Flutterwave</button>
  </div>
</template>

<script setup>
function makePayment() {
  FlutterwaveCheckout({
  public_key: "FLWPUBK_TEST-636287b07025e2779058ab73c983bbe8-X",
  tx_ref: "hooli-tx-1920bbtytty",
  amount: 100,
  currency: "NGN",
  customer: {
    email: "customer@example.com",
    phonenumber: "07064586146",
    name: "John Doe",
  },
  callback: function (response) {
    console.log(response, 'ddddd');
    alert("Payment successful!");
  },
  onclose: function () {
    console.log("Payment closed");
  },
});
  // FlutterwaveCheckout({
  //   public_key: "FLWPUBK_TEST-636287b07025e2779058ab73c983bbe8-X", // Add your public key here
  //   tx_ref: "hooli-tx-1920bbtytty",
  //   amount: 100, // Amount in your currency
  //   currency: "NGN", // Set your preferred currency
  //   payment_options: "card, mobilemoney, ussd",
  //   customer: {
  //     email: "customer@example.com",
  //     phonenumber: "07064586146",
  //     name: "John Doe",
  //   },
  //   customizations: {
  //     title: "My Vue App",
  //     description: "Payment for items in cart",
  //     logo: "https://your-logo-url.com/logo.png",
  //   },
  //   callback: function (data) {
  //     console.log(data);
  //     // Handle response or redirect user after successful payment
  //     if (data.status === "successful") {
  //       alert("Payment successful! Transaction ref: " + data.transaction_id);
  //       navigateTo("/user");
  //     }
  //   },
  //   onclose: function() {
  //     console.log("Payment closed.");
  //   },
  // });
}
</script>

<style scoped>
.payment-container {
  text-align: center;
  margin: 2rem;
}

.payment-button {
  padding: 10px 20px;
  background-color: #f2c94c;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.payment-button:hover {
  background-color: #f29e2c;
}
</style>
