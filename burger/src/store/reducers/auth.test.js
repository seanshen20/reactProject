import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'


describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })

    it('should store the token upon login', () => {
        const prev = {
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }
        const action = {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'b',
            userId: 'a',
        }
        const result = {
            token: 'b',
            userId: 'a',
            error: null,
            loading: false,
            authRedirectPath: '/'
        }
        expect(reducer(prev, action)).toEqual(
            result
        )
    })

})
