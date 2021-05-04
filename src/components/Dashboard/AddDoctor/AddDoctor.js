import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setfile] = useState(null)

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setfile(newFile)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)


        fetch('https://boiling-ravine-47755.herokuapp.com/addDoctor', {
            method: 'POST',
            body: formData,
            
        })
            .then(res => res.json())
            .then(document => {
                if(document){
                    console.log(document)
                    alert('add doctor successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label  className="form-label">Name</label>
                            <input onBlur={handleBlur} type="text" name="name" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email</label>
                            <input onBlur={handleBlur} type="email" name="email" className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Upload File</label>
                            <input onChange={handleFile} type="file" className="form-control w-25" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary border-0">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;