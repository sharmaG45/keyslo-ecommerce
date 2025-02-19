const trackOrder = () => {
    return <>
        <div className="license-key-container">
            <h1>Track License Key</h1>
            <form className="license-key-form" method="post">
                <label htmlFor="order_id">Enter Order ID:</label>
                <input
                    type="text"
                    id="order_id"
                    name="order_id"
                    placeholder="Order ID"
                    required=""
                />
                <br />
                <label htmlFor="customer_email">Enter Customer Email:</label>
                <input
                    type="email"
                    id="customer_email"
                    name="customer_email"
                    placeholder="Customer Email"
                    required=""
                />
                <br />
                <button type="submit">Get License Key</button>
            </form>
            <p> *Order up t0 1 month from today can be fetch by this tool.</p>
        </div>

    </>
}
export default trackOrder;