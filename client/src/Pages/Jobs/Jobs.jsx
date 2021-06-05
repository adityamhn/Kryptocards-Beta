import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {JobsCard} from '../../Components/JobsCard'
import { JOBS } from '../../constants';
import './Jobs.scss';
import {store} from '../../app/store';
import {changeNavbarMode} from '../../features/NavbarLogo/NavbarLogoSlice';
import Footer from '../../Components/Footer';


export const Jobs = () => {

    useEffect(()=>{
        store.dispatch(changeNavbarMode({value:"LOGO",show:true}))
    },[])


    return (
        <Container fluid className="jobs-cont">
            <div className="jobs-wrapper">
                <div className="job-header">
                    <h1 className="title"> HIRING THE <span className="other-color">EXTRAORDINARY</span> </h1>
                </div>
                <div className="jobs-body">
                <h3 className="title">Jobs Open</h3>
                {JOBS.map((job,index) => (
                    <JobsCard key={index} job={job} />

                ))}
                

                </div>
                <Footer/>
            </div>
        </Container>
    )
}

