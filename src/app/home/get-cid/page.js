const { Exo } = require("next/font/google")

const getCID = () => {
    return <>
        <div className="cid-container">
            <h2>Get CID Details</h2>
            <p>
                This Tool helps you to get <b>Confirmation ID (CID)</b> to activate MS
                Office Application/ Windows Operating systems. The tool is 100% premium
                solution work with order ID and Token.
            </p>
            <form className="cid-form" method="post">
                <label htmlFor="order_id">Enter Order ID:</label>
                <div className="input-container">
                    <input
                        type="text"
                        id="order_id"
                        name="order_id"
                        placeholder="Enter the order ID of the Token item purchased from the store."
                        defaultValue=""
                        required=""
                    />
                    <button type="button" className="clear-button" onclick="clearOrderID()">
                        ×
                    </button>
                </div>
                <label htmlFor="license_key">Enter License Key (Token):</label>
                <div className="input-container">
                    <input
                        type="text"
                        id="license_key"
                        name="license_key"
                        placeholder="Enter the License (Token) you get after purchase Token item."
                        defaultValue=""
                        required=""
                    />
                    <button
                        type="button"
                        className="clear-button"
                        onclick="clearLicenseKey()"
                    >
                        ×
                    </button>
                </div>
                <label htmlFor="installation_id">Enter Customer Installation ID:</label>
                <div className="input-container">
                    <input
                        type="text"
                        id="installation_id"
                        name="installation_id"
                        placeholder="Enter the Installation ID displayed at activation Wizard page. "
                        defaultValue=""
                        required=""
                    />
                    <button
                        type="button"
                        className="clear-button"
                        onclick="clearInstallationID()"
                    >
                        ×
                    </button>
                </div>
                <button type="submit">Get CID</button>
            </form>
            <div className="cid-results">
                <h2>Confirmation Result:</h2>
                <div className="cid-inputs">
                    <label>Full CID:</label>
                    <input
                        type="text"
                        defaultValue=""
                        placeholder="CID will be displayed here..."
                        readOnly=""
                    />
                    <button
                        type="button"
                        className="copy-button full-width"
                        onclick="copyToClipboard('')"
                    >
                        Copy
                    </button>
                    <label>Full C_CID:</label>
                    <input
                        type="text"
                        defaultValue=""
                        placeholder="CID will be displayed here..."
                        readOnly=""
                    />
                    <button
                        type="button"
                        className="copy-button full-width"
                        onclick="copyToClipboard('')"
                    >
                        Copy
                    </button>
                </div>
                <div className="cid-segments">
                    <table>
                        <tbody>
                            <tr>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                                <th>D</th>
                                <th>E</th>
                                <th>F</th>
                                <th>G</th>
                                <th>H</th>
                            </tr>
                            <tr>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
}

export default getCID;