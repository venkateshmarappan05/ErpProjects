import axios from 'axios'
// ================ category ======================

// export const CATEGORY_LIST = 'CATEGORY_LIST';
// export const categoryData = data => ({
//     type: CATEGORY_LIST,
//     data
// });
// export const createCategory = data => dispatch => {
// 	return axios.post("/api/category/createCategory" , data)
// 	.then(res => dispatch(getCategoryList))
// }
// export const getCategoryList =()=> dispatch => {
// 	return axios.get("/api/category/getCategoryList")
// 	.then(res => res.data.content)
// 	.then(rslt => {
// 		dispatch(categoryData(rslt));
// 	})
// }

// ========== Brand =========================
export const BRAND_LIST = 'BRAND_LIST';
export const brandData = data => ({
    type: BRAND_LIST,
    data
});
export const createBrand = data => dispatch => {
	return axios.post("/api/brand/createBrand" , data)
	//.then(res => dispatch(getBrandList))
}
export const getBrandList =()=> dispatch => {
	return axios.get("/api/brandList")
	.then(res => res.data)
	.then(rslt => {
		dispatch(brandData(rslt));
	})
}
export const deleteBrand = data => dispatch =>{
	return axios.put("/api/deleteBrand", data)
	.then(res => res.data);
}
// =========== Product =================

// export const PRODUCT_LIST = 'PRODUCT_LIST';
// export const productData = data => ({
//     type: PRODUCT_LIST,
//     data
// });
// export const createProduct = data => dispatch => {
// 	return axios.post("/api/product/createProduct" , data)
// 	.then(res => dispatch(getProductList))
// }
// export const getProductList =()=> dispatch => {
// 	return axios.get("/api/product/getProductList")
// 	.then(res => res.data.content)
// 	.then(rslt => {
// 		dispatch(productData(rslt));
// 	})
// }

// ================== USER ===================

// export const USER_LIST = 'USER_LIST';
// export const userData = data => ({
//     type: USER_LIST,
//     data
// });
// export const createUser = data => dispatch => {
// 	return axios.post("/api/user/createUser" , data)
// 	.then(res => dispatch(getUserList))
// }
// export const getUserList =()=> dispatch => {
// 	return axios.get("/api/user/getUserList")
// 	.then(res => res.data.content)
// 	.then(rslt => {
// 		dispatch(userData(rslt));
// 	})
// }

// =====================customer ===========================
// export const CUSTOMER_LIST = 'CUSTOMER_LIST';
// export const customerData = data => ({
//     type: CUSTOMER_LIST,
//     data
// });
// export const createCustomer = data => dispatch => {
// 	return axios.post("/api/customer/createCustomer" , data)
// 	//.then(res => dispatch(getCustomerList))
// }
// export const getCustomerList =()=> dispatch => {
// 	return axios.get("/api/customer/getCustomerList")
// 	.then(res => res.data.content)
// 	.then(rslt => {
// 		dispatch(customerData(rslt));
// 	})
// }