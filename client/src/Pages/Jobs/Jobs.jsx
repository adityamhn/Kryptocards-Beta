import React from 'react'
import { Container } from 'react-bootstrap'
import JobsCard from '../../Components/JobsCard'
import './Jobs.scss'

const jobs = [
    {
        jobTitle : "Graphic Designer",
        location : "Manipal, India",
        shortDesc : "Lorem ipsuvvm dolor sit amet, consectetur adipiscing elit. Sed in aliquam nulla, ut iaculis felis.",
        longDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae gravida libero. Mauris mattis sagittis tristique. Vivamus porta, eros id placerat bibendum, mi ligula ornare felis, in lobortis risus metus id nunc. Nam in massa nec mi faucibus congue. Ut est ex, vestibulum quis mauris ac, tempor consectetur sapien. Duis pharetra lobortis diam at efficitur. Suspendisse potenti. Fusce a vestibulum arcu, nec tempus sapien. "
    },
    {
        jobTitle : "Graphic Designer",
        location : "Manipal, India",
        shortDesc : "Lorem ipsuvvm dolor sit amet, consectetur adipiscing elit. Sed in aliquam nulla, ut iaculis felis.",
        longDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae gravida libero. Mauris mattis sagittis tristique. Vivamus porta, eros id placerat bibendum, mi ligula ornare felis, in lobortis risus metus id nunc. Nam in massa nec mi faucibus congue. Ut est ex, vestibulum quis mauris ac, tempor consectetur sapien. Duis pharetra lobortis diam at efficitur. Suspendisse potenti. Fusce a vestibulum arcu, nec tempus sapien. "
    },
    {
        jobTitle : "Graphic Designer",
        location : "Manipal, India",
        shortDesc : "Lorem ipsuvvm dolor sit amet, consectetur adipiscing elit. Sed in aliquam nulla, ut iaculis felis.",
        longDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae gravida libero. Mauris mattis sagittis tristique. Vivamus porta, eros id placerat bibendum, mi ligula ornare felis, in lobortis risus metus id nunc. Nam in massa nec mi faucibus congue. Ut est ex, vestibulum quis mauris ac, tempor consectetur sapien. Duis pharetra lobortis diam at efficitur. Suspendisse potenti. Fusce a vestibulum arcu, nec tempus sapien. "
    },
    
]

export const Jobs = () => {
    return (
        <Container fluid className="jobs-cont">
            <div className="jobs-wrapper">
                <div className="header">
                    <h1 className="title"><span className="other-color">JOIN</span> US TODAY</h1>
                </div>
                <div className="jobs-body">
                <h3 className="title">Jobs Open</h3>
                {jobs.map((job,index) => (
                    <JobsCard key={index} job={job} />

                ))}
                

                </div>
            </div>
        </Container>
    )
}

