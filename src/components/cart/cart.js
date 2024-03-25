import React,{useState} from 'react';
import Api from '../../Api/Api';
import { useSelector } from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons from react-icons library
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../Store/Slice/Cartslice';
import Loader from '../../common/Loader/Loader';
import Button from '@mui/material/Button';
function Cart() {
    const data = useSelector((state) => state.cartdata.cartdata);
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)
    const handleIncrement = async (itemdata) => {

        try {

            // const productIndex = data.Products.findIndex(item => item.ProductID === ProductID);
            const productIndex = data.Products.findIndex(existingProduct => {
                return (
                    existingProduct.ProductID === itemdata.ProductID
                );
            });


            if (productIndex !== -1) {
                const newData = JSON.parse(JSON.stringify(data)); // Deep copy
                newData.Products[productIndex].Qty += 1;

                 setLoader(true)

                setTimeout(async () => {
                    const res = await Api.cart(newData);

                    if (res?.code == 0) {
                        const resdata = res.data;
                         setLoader(false)
                        dispatch(addtocart({ datacart: resdata }));
                    } else {
                         setLoader(false)

                        toast.error("Oops! Something went wrong")
                    }
                }, 1000);




            }

        } catch (error) {
            setLoader(false)
            toast.error("Oops! Something went wrong")
        }


    };

    const handleDecrement = async (itemdata) => {
        try {
            const productIndex = data.Products.findIndex(existingProduct => {
                return (
                    existingProduct.ProductID === itemdata.ProductID
                );
            });

            if (productIndex !== -1 && data.Products[productIndex].Qty > 0) {
                const newData = JSON.parse(JSON.stringify(data)); // Deep copy
                newData.Products[productIndex].Qty -= 1;
                setLoader(true)

                setTimeout(async () => {
                    const res = await Api.cart(newData);

                    if (res.code == 0) {
                        const resdata = res.data;
                         setLoader(false)
                        dispatch(addtocart({ datacart: resdata }));

                    } else {
                         setLoader(false)
                        toast.error("Oops! Something went wrong")
                    }

                }, 1000);
            }

        } catch (error) {


             setLoader(false)
            toast.error("Oops! Something went wrong")
        }

    };

    return (
        <>

            {loader == true ? <Loader /> : ""}
            <div style={styles.body}>
                <div className="card" style={styles.card}>
                    <div className="row">
                        <div className="col-md-8 cart" style={styles.cart}>
                            <div className="title" style={styles.title}>
                                <div className="row">
                                    <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                    <div className="col align-self-center text-right text-muted">{data?.Products.length} items</div>
                                </div>
                            </div>
                            {data?.Products.length > 0 && data?.Products.map((item) => (
                                <div key={item.id} className="row border-top border-bottom">
                                    <div className="row main align-items-center">
                                        <div className="col-2"><img className="img-fluid" src={item?.Image} alt={item?.ProductName} /></div>
                                        <div className="col">
                                            <div className="row">{item?.ProductName}</div>
                                            <div className="row">MRP:{item?.Amount}</div>
                                        </div>
                                        <div className="col">
                                            <button onClick={() => handleDecrement(item)}><FaMinus /></button>
                                            <button className="border">{item?.Qty}</button>
                                            <button onClick={() => handleIncrement(item)}><FaPlus /></button>
                                        </div>
                                        <div className="col">₹{item?.SubTotal}<span className="close">&#10005;</span></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="col-md-4 summary" style={styles.summary}>
                        <div><h5><b>Summary</b></h5></div>
                        <hr />
                        <div className="row">
                            <div className="col" style={{ paddingLeft: '0' }}>ITEMS 3</div>
                            <div className="col text-right">&euro; 132.00</div>
                        </div>
                        <form>
                            <p>SHIPPING</p>
                            <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                            <p>GIVE CODE</p>
                            <input id="code" placeholder="Enter your code" />
                        </form>
                        <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">&euro; 137.00</div>
                        </div>
                        <button className="btn">CHECKOUT</button>
                    </div> */}
                        <div class="col-md-12 col-md-4 col-lg-4" style={styles.summary}>
                            <div class="summary">
                                <h3 style={styles.heading}>Summary</h3>
                                <div style={styles.summaryItem}><span style={styles.text}>Subtotal</span><span style={styles.price}> ₹{data?.Subtotal}</span></div>
                                {/* <div style={styles.summaryItem}><span style={styles.text}>Discount</span><span style={styles.price}>$0</span></div>
                                <div style={styles.summaryItem}><span style={styles.text}>Shipping</span><span style={styles.price}>$0</span></div> */}
                                <div style={styles.summaryItem}><span style={styles.text}>Total</span><span style={styles.price}>₹{data?.Amount}</span></div>
                                {/* <button type="button" className="btn btn-primary btn-lg"  style={styles.button}>Checkout</button> */}
                                <Button variant="outlined"  style={styles.button}>Checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

const styles = {
    body: {
        background: '#ddd',
        minHeight: '100vh',
        verticalAlign: 'middle',
        display: 'flex',
        fontFamily: 'sans-serif',
        fontSize: '0.8rem',
        fontWeight: 'bold',
    },
    title: {
        marginBottom: '5vh',
    },
    card: {
        margin: 'auto',
        maxWidth: '950px',
        width: '90%',
        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '1rem',
        border: 'transparent',
    },
    cart: {
        backgroundColor: '#fff',
        padding: '4vh 5vh',
        borderBottomLeftRadius: '1rem',
        borderTopLeftRadius: '1rem',
    },
    summary: {
        // backgroundColor: '#ddd',
        // borderTopRightRadius: '1rem',
        // borderBottomRightRadius: '1rem',
        // padding: '4vh',
        // color: 'rgb(65, 65, 65)',
        borderTop: '2px solid #5ea4f3',
        backgroundColor: '#f7fbff',
        height: '100%',
        padding: '30px',
    },

    heading: {
        textAlign: "center",
        fontSize: "1.3em",
        fontWeight: 600,
        paddingTop: " 20px",
        paddingBottom: '20px',
    },
    summaryItem: {
        paddingBottom: '10px',
        paddingTop: '10px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    },

    text: {
        fontSize: "1em",
        fontWeight: 600,
    },

    price: {
        fontSize: "1em",
        float: "right",
    },
    button: {
        marginTop: "20px",
        width: "100%"
    }


    // Add the rest of the styles here...
};

export default Cart;
