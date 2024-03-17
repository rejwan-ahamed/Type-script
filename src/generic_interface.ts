interface Result<T> {
    data: T | null;
    error: string | null;
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null };
}

interface User {
    Username: string;
}

interface Product {
    ProductID: number;
}

let userData = fetch<User>('google.com');
userData.data?.Username;

let productData = fetch<Product>('unknown.com');
productData.data?.ProductID;









