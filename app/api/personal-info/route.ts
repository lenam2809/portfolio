// app/api/personal-info/route.ts
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { DEFAULT_PERSONAL_INFO, PersonalInfo } from '@/lib/personal-info'

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "data", "personalInfo.json")
        const fileExists = fs.existsSync(filePath)

        if (!fileExists) {
            console.warn("personalInfo.json không tồn tại, sử dụng dữ liệu mặc định")
            return NextResponse.json(DEFAULT_PERSONAL_INFO)
        }

        const jsonData = await fs.promises.readFile(filePath, "utf8")
        const data = JSON.parse(jsonData) as PersonalInfo

        // Kiểm tra dữ liệu có hợp lệ không
        if (!data.name || !data.email) {
            console.warn("personalInfo.json thiếu các trường bắt buộc, sử dụng dữ liệu mặc định")
            return NextResponse.json(DEFAULT_PERSONAL_INFO)
        }

        return NextResponse.json(data)
    } catch (error) {
        console.error("Lỗi khi đọc personalInfo.json:", error)
        return NextResponse.json({
            message: 'Error reading personal info',
            data: DEFAULT_PERSONAL_INFO
        }, { status: 500 })
    }
}