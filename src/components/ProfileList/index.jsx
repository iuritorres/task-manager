import PropTypes from 'prop-types'
import './style.css'

ProfileList.propTypes = {
  profiles: PropTypes.array,
}

const MAX_PROFILES = 5

export function ProfileList({ profiles }) {
  return (
    <div className="profile-list">
      {profiles &&
        profiles.slice(0, MAX_PROFILES).map((profile) => {
          const profilesTotalIndexes = profiles.length - 1
          const profileIndex = profiles.indexOf(profile) + 1

          const profileZIndex = profilesTotalIndexes - profileIndex

          return (
            <div
              className="image-wrapper profile"
              key={`profile-${profile.name}`}
              style={{
                zIndex: profileZIndex,
              }}
            >
              <button
                className="profile"
                title={profile.name}
                style={{
                  backgroundImage: `url(${profile.img})`,
                }}
              ></button>
            </div>
          )
        })}

      {profiles.length > MAX_PROFILES && (
        <p>+{profiles.length - MAX_PROFILES}</p>
      )}
    </div>
  )
}
