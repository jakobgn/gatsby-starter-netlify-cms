import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems, config}) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">       
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
               <h4 style={{whiteSpace: 'nowrap'}}>{item.imageHeader}</h4>
            </div>
          </div>
          <p style={{textAlign:config.centered? 'center' : 'left'}}>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)
FeatureGrid.defaultProps = {
  config: {}
}

FeatureGrid.propTypes = {
  config: PropTypes.shape({
      centered: PropTypes.bool
    }),
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      imageHeader: PropTypes.string,
    })
  ),
}

export default FeatureGrid
