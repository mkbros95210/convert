import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Main content wrapper, designed to flex-grow and push the footer down */}
      <div style={{ flexGrow: 1, position: 'relative' }}>
        {/* Centered 404 message container */}
        <div
          style={{
            width: '800px',
            marginLeft: '-400px',
            position: 'absolute',
            top: '30%',
            left: '50%',
          }}
          className="text-center"
        >
          <h1
            style={{
              margin: '0',
              fontSize: '150px',
              lineHeight: '150px',
            }}
            className="fw-700"
          >
            404
          </h1>
          <h2
            style={{
              marginTop: '20px',
              fontSize: '30px',
            }}
          >
            Not Found
          </h2>
          <p>The resource requested could not be found on this server!</p>
        </div>
      </div>

      {/* Footer content */}
      <div
        style={{
          color: '#f0f0f0',
          padding: '0px 30px',
          position: 'relative',
          clear: 'both',
          height: '100px',
          marginTop: '-101px',
          backgroundColor: '#474747',
          borderTop: '1px solid rgba(0,0,0,0.15)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        }}
        className="font-12"
      >
        <br />
        Proudly powered by LiteSpeed Web Server
        <p>Please be advised that LiteSpeed Technologies Inc. is not a web hosting company and, as such, has no control over content found on this site.</p>
      </div>
    </>
  );
};

export default AboutPage;