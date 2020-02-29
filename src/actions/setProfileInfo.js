import ActionTypes from './ActionTypes'

export default function(profileInfo) {
    return {
        type: ActionTypes.SET_PROFILE_INFO,
        profile: profileInfo
    }
}