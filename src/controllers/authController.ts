import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { UserModel } from '../models/user'
import { v4 } from 'uuid'
import bcrypt from 'bcryptjs'

const encryptPassword = (password: string) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, result) => {
            if (!err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

const checkPassword = (encryptPassword: string, password: string) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, encryptPassword, (err, result) => {
            if (!err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

export const register = async (req: Request, res: Response) => {
    try {
        const payload = { 
            ...req.body,
            password: await encryptPassword(req.body.password),
            id: v4(),
        }

        await UserModel.query().insert(payload)

        res.status(201).json({
            status: true,
            message: 'success',
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: JSON.stringify(err),
        })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await UserModel.query().findOne({ email })

        if (!user) {
            res.status(400).json({
                status: false,
                message: 'User tidak ditemukan!',
            })
        } else {
            const isPasswordCorrect = await checkPassword(user.password, password)

            if (!isPasswordCorrect) {
                res.status(400).json({
                    status: false,
                    message: 'Password salah!',
                })
            } else {
                res.status(200).json({
                    status: true,
                    message: 'success',
                    data: user,
                })
            }
        }
    } catch (err) {
        res.status(500).json({
            status: false,
            message: JSON.stringify(err),
        })
    }
}