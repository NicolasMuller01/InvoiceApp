import { invoiceService, invoiceTotal } from "./services/InvoiceServices"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";

//rafc

function InvoiceApp() {

  const invoice = invoiceService();
  const [invoiceItemsState, setInvoiceItemsState] = useState({
    product: "",
    price: "",
    quantity: ""
  });
  const [itemValue, setItemValue] = useState(invoice.items);
  const [counterValue, setCounterValue] = useState(4);
  const [dinamicTotal, setDinamicTotalValue] = useState(invoice.total);
  const { product, price, quantity} = invoiceItemsState;

  const onIvoiceFormChange = (e) => {
    setInvoiceItemsState({
      ...invoiceItemsState,
      [e.name]: e.value
    })
  }

  const invoiceItemSubmit = (e) =>{
    e.preventDefault();
    if(product.trim().length <1 | price.trim().length <1 | quantity.trim().length <1) return;
    setItemValue([...itemValue, {id:counterValue ,product: product, price: price, quantity: quantity}])
    setCounterValue(counterValue+1)
    setInvoiceItemsState({
      product: "",
      price: "",
      quantity: "",
    })
    }

    useEffect(()=>{
        setDinamicTotalValue(invoiceTotal(itemValue));
    }, [itemValue])
  

  return (
    <>
    <div className="card">
      <div className="container">
        <h1>Ejemplo factura</h1>
          <InvoiceView id={invoice.name} name={invoice.name}></InvoiceView>

        <div className="row">

          <div className="col">
            <ClientView name={invoice.client.name} lastname={invoice.client.lastName} city={invoice.client.address.city} street={invoice.client.address.street} number={invoice.client.address.number}></ClientView>
          </div>

          <div className="col">
            <CompanyView name={invoice.company.name} fiscalNumber={invoice.company.fiscalNumber}></CompanyView>
          </div>
        </div>
        <ListItemsView items={itemValue}></ListItemsView>
        <TotalView total={dinamicTotal}></TotalView>

        <form onSubmit={ e => invoiceItemSubmit(e)}>

          <input className="form-control mb-3" onChange={e => onIvoiceFormChange(e.target)} 
            type="text"
            name="product"
            value={product}
            placeholder="Product"
          />
          <input className="form-control mb-3" onChange={e => onIvoiceFormChange(e.target)}
            type="number"
            name="price"
            value={price}
            placeholder="Price"
          />
          <input className="form-control mb-3" onChange={e => onIvoiceFormChange(e.target)}  
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Quantity"
          />
          <button type="submit" className="btn btn-danger">Save</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default InvoiceApp
