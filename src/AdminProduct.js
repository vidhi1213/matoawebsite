import React, { useState } from 'react'
import { Btn } from './Style.js';
import { Continue, MMerge, MBtn, Image, Pdetail, Name, Select, Input, Groupbtn, Btnlogin, Cancelbtn, Groupbtns, VFlex, VBtn, AddVar, Inp1, InputArea } from './Styles.js';
import Modal from 'react-modal'
import user from './Images/user.png'
import { useSelector, useDispatch } from 'react-redux';
import { addData, editData, deleteData } from './action/action.js'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import ImageUploading from 'react-images-uploading';
const AdminProduct = () => {
    const list = useSelector((state) => state.adminreducer.dataSource)
    console.log(list);
    const dispatch = useDispatch();
    const maxNumber = Infinity;
    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(false)
    const [showvariation, setShowVariation] = useState([{
        wprice: '',
        wcolor: '',
        wquantity: '',
        images: []
    }])
    const [admin, setAdmin] = useState({
        key: '',
        wname: '',
        wprice: '',
        actprice: '',
        available: '',
        detail: '',
        warranty: ''
    })

    //detail......
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }
    const htmlvalue = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    console.log(htmlvalue);
    const [editorState1, setEditorState1] = useState('');
    const [newHTML, setNewHTML] = useState('')

    const convertToDraft = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNewHTML(value)
        const contentBlock = htmlToDraft(newHTML);
        const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks
        );
        const editorState1 = EditorState.createWithContent(contentState);
        setEditorState1(editorState1);
    };

    const onEditorStateChange1 = (editorState1) => {
        // updates state from onChange event
        setEditorState1(editorState1);
    };

    //warranty.....
    const [editorStatenew, setEditorStateNew] = React.useState(
        () => EditorState.createEmpty(),
    );
    const onEditorStateChangeNew = (editorStatenew) => {
        setEditorStateNew(editorStatenew)
    }
    const htmlvalue1 = draftToHtml(convertToRaw(editorStatenew.getCurrentContent()))
    console.log(htmlvalue1);

    const [editorState1new, setEditorState1New] = useState('');
    const [newHTML1, setNewHTML1] = useState('')

    const convertToDraftNew = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNewHTML1(value)
        const contentBlock = htmlToDraft(newHTML1);
        const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks
        );
        const editorState1new = EditorState.createWithContent(contentState);
        setEditorState1New(editorState1new);
    };

    const onEditorStateChange1New = (editorState1new) => {
        // updates state from onChange event
        setEditorState1New(editorState1new);
    };

    //uploadimage......
    const onChange = (imageList, index) => {
        console.log(imageList);
        // setInput(input => input.map((, i) => {
        //     if (i === index) .image = imageList
        //     return _
        // }))
        // console.log(input);
        const list = [...showvariation]
        list[index].images = imageList
        setShowVariation(list)


    };

    const HandleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const { name, value } = e.target;
        setAdmin({ ...admin, [name]: value })
        setNewHTML(value)
        setNewHTML1(value)
    }
    const HandleSubmit = () => {
        setOpen(false)
        const newdata = { key: admin.key, wname: admin.wname, wprice: admin.wprice, actprice: admin.actprice, available: admin.available, detail: htmlvalue, warranty: htmlvalue1 }
        console.log(newdata);
        dispatch(addData(newdata))
        setAdmin({
            key: '',
            wname: '',
            wprice: '',
            actprice: '',
            available: '',
            detail: '',
            warranty: ''
        })
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const onEdit = (index) => {
        const userdata = list[index]
        console.log(userdata.detail);
        setOpen(true)
        setEdit(true)
        setAdmin({ ...admin, key: userdata.key, wname: userdata.wname, wprice: userdata.wprice, actprice: userdata.actprice, available: userdata.available, detail: userdata.detail, warranty: userdata.warranty })
    }
    const onDelete = (index) => {
        console.log(index);
        dispatch(deleteData(index))
    }

    const HandleUpdate = () => {
        // console.log(data.img);
        // console.log(fileList[0].thumbUrl);
        const newdata = { key: admin.key, wname: admin.wname, wprice: admin.wprice, actprice: admin.actprice, available: admin.available, detail: htmlvalue, warranty: htmlvalue1 }
        dispatch(editData(newdata))
        setOpen(false);
        setAdmin({
            key: '',
            wname: '',
            wprice: '',
            actprice: '',
            available: '',
            detail: '',
            warranty: ''
        })
        setEdit(false);
    }

    const handleVariation = () => {
        setShowVariation([...showvariation, {
            wcolor: '',
            wprice: '',
            wquantity: '',
            images: []
        }])
    }

    const closeVariation = (index) => {
        const list1 = [...showvariation];
        list1.splice(index, 1)
        setShowVariation(list1)
    }
    const haldleInputChange = (e, i) => {
        const { name, value } = e.target;
        const list1 = [...showvariation]
        list1[i][name] = value;
        setShowVariation(list1)

    }
    console.log(showvariation);
    return (
        <>
            <div>
                <Btn primary type="button" onClick={() => { setOpen(true); setEdit(false) }} style={{ float: 'right' }}>+</Btn>
            </div>
            <table border="1">
                <thead>
                    <th>Index</th>
                    <th>Watch Name</th>
                    <th>price</th>
                    <th>available</th>
                    <th>action</th>
                </thead>
                <tbody>
                    {list?.map((item, index) => {
                        return (<tr><td>{item.key}</td><td>{item.wname}</td><td>{item.wprice}</td><td>{item.available}</td><td><button onClick={() => onEdit(index)}>Edit</button><button onClick={() => onDelete(item.key)}>Delete</button></td></tr>)
                    })}
                </tbody>
            </table>
            <Modal className='modalstyle' isOpen={open}>
                <MMerge>
                    <Image src={user} alt="user" />
                    <MBtn type='button' onClick={() => { setOpen(false); setAdmin('') }} ><i class="fa fa-times-circle"></i></MBtn>
                </MMerge>
                <Continue>Form</Continue>

                <Pdetail>
                    <Name>Watch Name</Name>
                    <Input type="text" placeholder="Ex: WAY KAMBAS MINI EBONY" name="wname" value={admin.wname} onChange={HandleChange}></Input>
                    <VFlex>
                        <Name>Variation</Name>
                        <VBtn type='button' onClick={() => handleVariation()} >ADD</VBtn>
                    </VFlex>
                    {showvariation?.map((ele, i) => {
                        return (
                            <div style={{ display: 'flex' }}>
                                <AddVar>
                                    <Name>color</Name>
                                    <Inp1 type="text" placeholder="Ex: Black" name="wcolor" value={ele.wcolor} onChange={(ele) => haldleInputChange(ele, i)}></Inp1>
                                    <Name>Price</Name>
                                    <Inp1 type="text" placeholder="Ex: Rp 1.280.000" name="wprice" value={ele.wprice} onChange={(ele) => haldleInputChange(ele, i)}></Inp1>
                                    <Name>Quantity</Name>
                                    <Inp1 type="text" placeholder="Ex: 25" name="wquantity" value={ele.wquantity} onChange={(ele) => haldleInputChange(ele, i)}></Inp1>
                                    <Name>Image</Name>
                                    <ImageUploading
                                        multiple
                                        value={ele.images}
                                        onChange={(list) => onChange(list, i)}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                            imageList,
                                            onImageUpload,
                                            onImageRemoveAll,
                                            onImageUpdate,
                                            onImageRemove,
                                            isDragging,
                                            dragProps
                                        }) => (


                                            <div className="upload__image-wrapper">
                                                <button
                                                    style={isDragging ? { color: "red" } : null}
                                                    onClick={onImageUpload}
                                                    {...dragProps}
                                                >
                                                    Select Image
                                                </button>

                                                <button onClick={onImageRemoveAll}>Remove all </button>
                                                {imageList.map((image, i) => (
                                                    <div key={i} className="image-item">
                                                        <img src={image.data_url} alt="" width="100" />
                                                        <div className="image-item__btn-wrapper">
                                                            <button onClick={() => onImageUpdate(i)}>Update</button>
                                                            <button onClick={() => onImageRemove(i)}>Remove</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </ImageUploading>


                                </AddVar>
                                <MBtn type='button' onClick={() => { closeVariation(i) }} ><i class="fa fa-times-circle"></i></MBtn>
                            </div>
                        )
                    })}
                    <Name>Actual Price</Name>
                    <Input type="text" placeholder="Ex: Rp 1.280.000" name="actprice" value={admin.actprice} onChange={HandleChange}></Input>
                    <Name>Price</Name>
                    <Input type="text" placeholder="Ex: Rp 1.280.000" name="wprice" value={admin.wprice} onChange={HandleChange}></Input>
                    <Name>Available</Name>
                    <Select id="available" name="available" value={admin.available} onChange={HandleChange}>
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </Select>
                    <Name>Detail</Name>
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={onEditorStateChange}
                    />
                    <InputArea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} ></InputArea>
                    <InputArea type="text" placeholder="raw HTML" name="newHTML" value={newHTML} onChange={convertToDraft}></InputArea>
                    <Editor
                        editorState={editorState1}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={onEditorStateChange1}
                    />


                    <Name>Warranty</Name>
                    <Editor
                        editorState={editorStatenew}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={onEditorStateChangeNew}
                    />
                    <InputArea disabled value={draftToHtml(convertToRaw(editorStatenew.getCurrentContent()))} ></InputArea>
                    <InputArea type="text" placeholder="raw HTML" name="newHTML1" value={newHTML1} onChange={convertToDraftNew}></InputArea>
                    <Editor
                        editorState={editorState1new}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={onEditorStateChange1New}
                    />
                    <Groupbtns>
                        {edit ? <Btnlogin type="button" onClick={HandleUpdate}>UPDATE</Btnlogin> : <Btnlogin type="button" onClick={HandleSubmit}>SUBMIT</Btnlogin>}
                        <Cancelbtn type="button" onClick={handleCancel}>CANCEL</Cancelbtn>
                    </Groupbtns>
                </Pdetail>
            </Modal>
        </>
    )
}

export default AdminProduct
