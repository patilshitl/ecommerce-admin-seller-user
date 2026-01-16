import React, { useState } from 'react'


function SellerProduct() {

    const [showModal , setshowModal] = useState(false);

    const toggleModal = () =>  setshowModal(!showModal) ;

  return (
    <>
    <div className="card shadow-sm">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Your Products</h5>
                    <button className="btn btn-success btn-sm" onClick={toggleModal}>Add New Product</button>
        </div>
        <div className="card-body p-0">
        <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>jacket</td>
                                    <td>fashion</td>
                                    <td>500</td>
                                    <td>3</td>
                                    <td>Available</td>
                                    <td>
                                        <button type="button" className='btn btn-primary m-1'>Edit</button>
                                        <button type="button" className='btn btn-danger m-1'>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>jacket</td>
                                    <td>fashion</td>
                                    <td>500</td>
                                    <td>3</td>
                                    <td>Available</td>
                                    <td>
                                        <button type="button" className='btn btn-primary m-1'>Edit</button>
                                        <button type="button" className='btn btn-danger m-1'>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>jacket</td>
                                    <td>fashion</td>
                                    <td>500</td>
                                    <td>3</td>
                                    <td>Available</td>
                                    <td>
                                        <button type="button" className='btn btn-primary m-1'>Edit</button>
                                        <button type="button" className='btn btn-danger m-1'>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>jacket</td>
                                    <td>fashion</td>
                                    <td>500</td>
                                    <td>3</td>
                                    <td>Available</td>
                                    <td>
                                        <button type="button" className='btn btn-primary m-1'>Edit</button>
                                        <button type="button" className='btn btn-danger m-1'>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>jacket</td>
                                    <td>fashion</td>
                                    <td>500</td>
                                    <td>3</td>
                                    <td>Available</td>
                                    <td>
                                        <button type="button" className='btn btn-primary m-1'>Edit</button>
                                        <button type="button" className='btn btn-danger m-1'>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
        </div>
        </div>
    </div>


    {/* model view */}

    <div>
        {showModal && (
                <>
                    {/* The Backdrop (Dark background) */}
                    <div className="modal-backdrop fade show" onClick={toggleModal}></div>

                    {/* The Modal Dialog */}
                    <div className="modal show d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content shadow-lg">
                                <div className="modal-header">
                                    <h5 className="modal-title">Product Details</h5>
                                    <button type="button" className="btn-close" onClick={toggleModal}></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className='row'>
                                            <div className="mb-3 col-6">
                                                <label className="form-label">Product Name</label>
                                                <input type="text" className="form-control" placeholder="Enter name" />
                                            </div>
                                            <div className="mb-3 col-6">
                                                <label className="form-label">Category</label>
                                                <input type="text" className="form-control" placeholder="Enter name" />
                                            </div>
                                            <div className="mb-3 col-6">
                                                <label className="form-label">Price</label>
                                                <input type="number" className="form-control" placeholder="0.00" />
                                            </div>
                                            <div className="mb-3 col-6">
                                                <label className="form-label">Stock</label>
                                                <input type="text" className="form-control" placeholder="Enter name" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={toggleModal}>Close</button>
                                    <button className="btn btn-primary">Save Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
    </div>
    </>
  )
}

export default SellerProduct
