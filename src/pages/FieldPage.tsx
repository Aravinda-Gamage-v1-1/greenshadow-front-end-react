import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../style/Field.css'
import MainContainer from "../components/MainContainer.tsx";
import AddButton from "../components/AddButton.tsx";
import AddFieldModal from "../components/FieldComponent/AddFieldModal.tsx"
import {Field} from "../models/Field.ts";
import {deleteField} from "../store/slices/FieldSlice.ts";

export default function FieldPage() {
    return (
        <section id="field-section">
            <div className="main-content">
                {/*<div className="search-bar mb-4">*/}
                {/*    <i class="fas fa-search "></i>*/}
                {/*  <input id="fieldSearch" type="text" placeholder="Search field names...">*/}
                {/*</div>*/}
                {/*<MainContainer dataArray={"fields"} renderItem={field: "Field", index: 4} noDataMessage={"No"} displayType={"card"}/>*/}
                <div id="field-container" className="item-container container">
                    <div className="no-data">
                        <img src="src/assets/img/noData.png" className="no-data-img" alt="Something wrong"/>
                        <p className="empty-message">No fields available to display</p>
                    </div>
                </div>
                {/*<AddButton text={"Add Field"} onClick={openModal}/>*/}
                <div className="add-btn-container">
                    <button
                        id="add-field"
                        type="button"
                        className="btn add-filed"
                        data-toggle="modal"
                        data-target="#addFieldModal"
                    >
                        <i className="fas fa-plus-circle"></i>Add Field
                    </button>
                </div>
            </div>

            <div
                className="modal fade"
                id="fieldDetailModal"
                tabIndex="-1"
                aria-labelledby="fieldDetailModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content custom-modal-background">
                        <div className="modal-header">
                            <h4
                                className="modal-title"
                                id="fieldDetailModalLabel"
                            >
                                Field Details
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
                            <form id="fieldDetailForm">
                                <div className="form-group">
                                    <label htmlFor="fieldCode">Field Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fieldCode"
                                        value="F001"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fieldName">Field Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fieldName"
                                        value="Field A"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fieldLocation"
                                    >Field Location (Coordinates)</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fieldLocation"
                                        value="35.6895° N, 139.6917° E"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fieldSize">Extent Size (Sq. meters)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fieldSize"
                                        value="1500"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="crops">Crops</label>
                                    <select id="crops" className="form-control" disabled>
                                        <option>Wheat</option>
                                        <option>Rice</option>
                                        <option>Corn</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="field-staff">Staff</label>
                                    <select id="field-staff" className="form-control" disabled>
                                        <option>John Doe</option>
                                        <option>Jane Smith</option>
                                        <option>Bob Brown</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Field Images</label>
                                    <div className="image-gallery">
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="Field Image 1"
                                            className="field-image"
                                        />
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="Field Image 2"
                                            className="field-image"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer btn-container">
                            <button type="button" className="btn" data-dismiss="modal">
                                <i className="fas fa-times-circle"></i> Close
                            </button>
                            <button type="button" className="btn" id="FieldUpdateBtn">
                                <i className="fas fa-edit"></i> Update
                            </button>
                            <button type="button" className="btn" id="FieldDeleteBtn">
                                <i className="fas fa-trash-alt"></i> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="addFieldModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addFieldModalLabel"
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
                                id="addFieldModalLabel"
                            >
                                Add New Field
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
                            <form id="addFieldForm">
                                <div className="form-group">
                                    <label htmlFor="Code">Field Code</label>
                                    <input
                                        type="text"
                                        className="form-control glass-input"
                                        id="Code"
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Name">Field Name</label>
                                    <input
                                        type="text"
                                        className="form-control glass-input"
                                        id="Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fieldLocation">Select Location</label>
                                    <div id="map"></div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        placeholder="Location"
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Size">Extent Size (Sq. m)</label>
                                    <input
                                        type="number"
                                        className="form-control glass-input"
                                        id="Size"
                                        required
                                    />
                                </div>

                                <div className="image-container d-flex justify-content-between">
                                    <div className="form-group">
                                        <label htmlFor="fieldImage1" className="custom-file-upload">
                                            <i className="fas fa-upload"></i> Image 1
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            id="fieldImage1"
                                            onChange="previewImage(event, 'preview1')"
                                        />
                                        <img
                                            id="preview1"
                                            className="img-preview mt-3"
                                            src=""
                                            alt="Image Preview"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fieldImage2" className="custom-file-upload">
                                            <i className="fas fa-upload"></i> Image 2
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            id="fieldImage2"
                                            onChange="previewImage(event, 'preview2')"
                                        />
                                        <img
                                            id="preview2"
                                            className="img-preview mt-3"
                                            src=""
                                            alt="Image Preview"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer btn">
                            <button type="button" className="btn" data-dismiss="modal">
                                <i className="fas fa-times"></i> Cancel
                            </button>
                            <button id="addField" type="button" className="btn">
                                <i className="fas fa-plus"></i> Add Field
                            </button>
                            <button
                                type="button"
                                className="btn"
                                id="FieldSaveBtn"
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