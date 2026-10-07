# PayGate test checkout

This integration is deliberately locked to PayGate public test account 10011072130. There is no live credential switch. Prices are calculated on the server from the catalogue, never from browser totals. Return tokens expire after one hour, and results are queried from PayGate and checked against the signed reference, currency and amount.

Set CHECKOUT_BASE_URL to the exact origin used in your browser, and CHECKOUT_SIGNING_SECRET to a private random value (32+ characters). Local values are in ignored .env.local. Hosted environments need their own configuration.

Try an approved test card: 4000000000000002; declined: 4000000000000036. Use future expiry and arbitrary test CVV. Never use real card details. Test email is sent to PayGate and may receive a test confirmation.

This is a test flow only: no persistent order database, stock reservation, fulfilment, shipping or tax calculations, or background webhook processing. A missed browser return is not reconciled automatically. Do not enable live sales until persistent orders and verified, idempotent notifications are implemented.

Documentation: https://docs.paygate.co.za/paygate-by-network/reference/testing
