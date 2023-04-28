//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "https://orderservice2-production.up.railway.app";

let findAllCustomers = () => {
 return fetch(host + '/orders/1')
        .then(x =>
        {
            let data = x.json();
        console.log(data);
        return data;
        });
};

let saveCustomer = (customer) => {
    return fetch(host + "/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: customer.name,
            email: customer.email
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    customers: findAllCustomers,
    saveCustomer: saveCustomer
};

export default data;