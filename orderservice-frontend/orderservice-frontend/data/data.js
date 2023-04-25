//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "http://localhost:8080";

let findAllCustomers = () => {
 return fetch(host + '/customers')
        .then(x => x.json()); 
};

let saveCustomer = (customer) => {
    return fetch(host + "/customers", {
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