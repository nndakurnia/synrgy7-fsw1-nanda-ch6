// import { BillModel, UserModel, BillDetailModel, BillTypeModel } from "../models";

// class PaymentService {
//   static async getAllBills(): Promise<any> {
//     try {
//       const bills = await BillModel.query();
//       return bills;
//     } catch (error) {
//       throw new Error(`Error fetching bills: ${(error as Error).message}`);
//     }
//   }

//   static async createBill(userId: number, totalPrice: number): Promise<any> {
//     try {
//       const bill = await BillModel.query().insert({
//         user_id: userId,
//         total_price: totalPrice,
//       });
//       return bill;
//     } catch (error) {
//       throw new Error(`Error creating bill: ${(error as Error).message}`);
//     }
//   }

//   static async addBillDetail(billId: number, billTypeId: number, amount: number, totalPrice: number): Promise<any> {
//     try {
//       const billDetail = await BillDetailModel.query().insert({
//         bill_id: billId,
//         bill_type_id: billTypeId,
//         amount: amount,
//         total_price: totalPrice,
//       });
//       return billDetail;
//     } catch (error) {
//       throw new Error(`Error adding bill detail: ${(error as Error).message}`);
//     }
//   }

//   static async getAllUsers(): Promise<any> {
//     try {
//       const users = await UserModel.query();
//       return users;
//     } catch (error) {
//       throw new Error(`Error fetching users: ${(error as Error).message}`);
//     }
//   }

//   static async getAllBillTypes(): Promise<any> {
//     try {
//       const billTypes = await BillTypeModel.query();
//       return billTypes;
//     } catch (error) {
//       throw new Error(`Error fetching bill types: ${(error as Error).message}`);
//     }
//   }
// }

// export default PaymentService;
