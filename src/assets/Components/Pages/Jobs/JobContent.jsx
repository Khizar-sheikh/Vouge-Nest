import React from 'react';
import { Card, Row, Col } from 'antd';

const JobsPage = () => {
    const jobsData = [
        {
          title: 'Factory Manager',
          description: 'Overseeing factory operations and managing staff.',
          location: 'City: Anytown, Country: XYZ',
          requirements: ['Bachelor’s degree in Engineering', '5+ years of managerial experience'],
        },
        {
          title: 'Production Supervisor',
          description: 'Supervising production line and ensuring efficiency.',
          location: 'City: Othertown, Country: ABC',
          requirements: ['Experience in manufacturing', 'Strong leadership skills'],
        },
        {
          title: 'Quality Control Inspector',
          description: 'Inspecting products for quality assurance.',
          location: 'City: Somewhere, Country: PQR',
          requirements: ['Attention to detail', 'Knowledge of quality standards'],
        },
        {
          title: 'Warehouse Associate',
          description: 'Handling inventory and organizing warehouse space.',
          location: 'City: Nowhere, Country: LMN',
          requirements: ['Forklift certification', 'Ability to lift heavy objects'],
        },
      ];

  return (
    <div className="site-card-wrapper">
      <Row gutter={[16, 16]}>
        {jobsData.map((job, index) => (
          <Col key={index} xs={24} sm={12}>
            <Card title={job.title} style={{ marginBottom: '20px' }}>
              <p><strong>Description:</strong> {job.description}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Requirements:</strong></p>
              <ul>
                {job.requirements.map((requirement, idx) => (
                  <li key={idx}>{requirement}</li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default JobsPage;
