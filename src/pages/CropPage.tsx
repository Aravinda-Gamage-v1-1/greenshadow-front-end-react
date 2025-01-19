import '../style/Crop.css'

export default function CropPage() {
    return (
        <section id="crop-section">
            <div className="main-content">

                {/*<div className="search-bar mb-4">*/}
                {/*    <i class="fas fa-search "></i>*/}
                {/*  <input type="text" placeholder="Search Crops by Field name...">*/}
                {/*</div>*/}

                <div id="crop-container" className="container item-container">
                    <div className="no-data">
                        <img src="src/assets/img/noData.png" className="no-data-img"/>
                        <p className="empty-message">No Crops available to display</p>
                    </div>

                    <div className="card-custom">
                        <div className="image-container">
                            <img
                                src="https://via.placeholder.com/600x200?text=Image"
                                alt="Crop Image"
                            />
                        </div>

                        <div className="card-content">
                            <div className="field-info">
                                <h4>Common Name</h4>
                                <p>Tomato</p>
                            </div>

                            <div className="field-info">
                                <h4>Special name</h4>
                                <p>Tomato</p>
                            </div>

                            <div className="field-info">
                                <h4>Category</h4>
                                <p>Vegetable</p>
                            </div>

                            <div className="field-info">
                                <h4>Field</h4>
                                <p>Field A</p>
                            </div>

                            <div className="view-more-container">
                                <button
                                    type="button"
                                    className="btn view-btn"
                                    data-toggle="modal"
                                    data-target="#cropDetailModal"
                                >
                                    View more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-custom">
                        <div className="image-container">
                            <img
                                src="https://via.placeholder.com/600x200?text=Image"
                                alt="Crop Image"
                            />
                        </div>

                        <div className="card-content">
                            <div className="field-info">
                                <h4>Common Name</h4>
                                <p>Tomato</p>
                            </div>

                            <div className="field-info">
                                <h4>Special name</h4>
                                <p>Tomato</p>
                            </div>

                            <div className="field-info">
                                <h4>Category</h4>
                                <p>Vegetable</p>
                            </div>

                            <div className="field-info">
                                <h4>Field</h4>
                                <p>Field A</p>
                            </div>

                            <div className="view-more-container">
                                <button
                                    type="button"
                                    className="btn view-btn"
                                    data-toggle="modal"
                                    data-target="#fieldDetailModal"
                                >
                                    View more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-btn-container">
                    <button
                        id="openAddModal"
                        type="button"
                        className="btn add-filed"
                        data-toggle="modal"
                        data-target="#addCropModal"
                    >
                        <i className="fas fa-plus-circle"></i>Add Crop
                    </button>
                </div>
            </div>

            <div
                className="modal fade"
                id="cropDetailModal"
                tabIndex="-1"
                aria-labelledby="cropDetailModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content custom-modal-background">
                        <div className="modal-header">
                            <img
                                src="https://via.placeholder.com/600x200?text=Crop+Image"
                                alt="Crop Image"
                                className="img-fluid"
                            />
                        </div>

                        <div className="modal-header">
                            <h4
                                className="modal-title"
                                id="cropDetailModalLabel"
                            >
                                Crop Details
                            </h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form id="cropDetailForm">
                                <div className="form-group">
                                    <label htmlFor="cropId">Crop ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cropId"
                                        value="C001"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="specialName">Special Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="specialName"
                                        value="Organic Tomato"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="commonName">Common Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="commonName"
                                        value="Tomato"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="category"
                                        value="Vegetable"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="field">Field</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="field"
                                        value="Field A"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="season">Season</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="season"
                                        value="Spring"
                                        readOnly
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer btn-container">
                            <button type="button" className="btn" data-dismiss="modal">
                                <i className="fas fa-times-circle"></i> Close
                            </button>
                            <button
                                type="button"
                                className="btn"
                                id="CropUpdateBtn"
                                onClick="toggleEditCropMode()"
                            >
                                <i className="fas fa-edit"></i> Update
                            </button>
                            <button type="button" className="btn" id="CropDeleteBtn">
                                <i className="fas fa-trash-alt"></i> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="addCropModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addCropModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-scrollable"
                    role="document"
                >
                    <div className="modal-content add-modal-custom">
                        <div className="modal-header">
                            <h4
                                className="modal-title"
                                id="addCropModalLabel"
                            >
                                Add New Crop
                            </h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="addCropForm">

                                <div className="form-group">
                                    <label htmlFor="Id">Crop ID</label>
                                    <input
                                        type="text"
                                        className="form-control glass-input"
                                        id="Id"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="CropSpecialName">Special Name</label>
                                    <input
                                        type="text"
                                        className="form-control glass-input"
                                        id="CropSpecialName"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="CropCommonName">Common Name</label>
                                    <input
                                        type="text"
                                        className="form-control glass-input"
                                        id="CropCommonName"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="CropCategory">Category</label>
                                    <input
                                        type="text"
                                        className="form-control glass-input"
                                        id="CropCategory"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fieldSelect">Field</label>
                                    <div className="d-flex align-items-center">
                                        <select
                                            id="fieldSelect"
                                            className="form-control glass-input"
                                            required
                                        >
                                            <option value="">Select Field</option>
                                            <option value="Field A">Field A</option>
                                            <option value="Field B">Field B</option>
                                        </select>
                                        <button
                                            type="button"
                                            className="btn ml-3 new-field-btn"
                                            data-toggle="modal"
                                            data-target="#addFieldModal"
                                        >
                                            Add Field
                                        </button>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="CropSeason">Season</label>
                                    <input
                                        type="text"
                                        className="form-control glass-input"
                                        id="CropSeason"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cropImage" className="custom-file-upload">
                                        <i className="fas fa-upload"></i> Upload Crop Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="cropImage"
                                        onChange="previewCropImage(event, 'cropPreview')"
                                    />
                                    <img
                                        id="cropPreview"
                                        className="img-preview mt-3"
                                        src=""
                                        alt="Image Preview"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer btn">
                            <button type="button" className="btn" data-dismiss="modal">
                                <i className="fas fa-times"></i> Cancel
                            </button>
                            <button id="addCrop" type="button" className="btn">
                                <i className="fas fa-plus"></i> Add Crop
                            </button>
                            <button
                                type="button"
                                className="btn"
                                id="CropSaveBtn"
                            >
                                <i className="fas fa-save"></i> Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}