import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcrypt-ts'
 
const prisma = new PrismaClient()
// $extends({
//   query: {
//     user: {
//       $allOperations({ operation, args, query }) {
//         if ((operation == "create" || operation == "update") && args.data['password']) {
//           let password =  String(args.data['password'])
//           args.data['password'] = hashSync(password, 10)
//         }
//         return query(args)
//       }
//     }
//   }
// })
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {name, email, password} = req.body
    const newUser = await prisma.user.create({ 
    data: {
      email,
      name,
      password
    }
  })
  res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json(error)
  }
  
  
}





