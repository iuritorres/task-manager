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
            <img
              className="profile"
              key={`profile-${profile.name}`}
              alt={`profile-${profile.name}`}
              src={profile.img}
              title={profile.name}
              style={{
                zIndex: profileZIndex,
              }}
            />
          )
        })}

      {profiles.length > MAX_PROFILES && (
        <p>+{profiles.length - MAX_PROFILES}</p>
      )}
    </div>
  )
}
