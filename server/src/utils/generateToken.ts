import jwt from 'jsonwebtoken'

export const generateToken = (payload: { _id: string, email: string }) => {
    const { _id, email } = payload
    try {  
        return jwt.sign({ _id, email }, 'ACCESS', { expiresIn: '12d' })
    } catch (error) {
        throw new Error('failded to generate token')
    }
}