import React, { useCallback, useState } from "react";
import { Button, Form, Image, Input } from "antd";
import Toast from "../ui/Toast";
import { useTranslations } from "next-intl";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const t = useTranslations("Contact");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const onFinish = useCallback(
    async (values) => {
      setLoading(true);
      try {
        await emailjs.send(
          "service_53984gr", // แทนด้วยของจริง
          "template_gc4vps5", // แทนด้วยของจริง
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          "BFsobDRdKvMAxeUUD" // แทนด้วยของจริง
        );

        showToast("ส่งข้อความสำเร็จ!");

        form.resetFields();
      } catch (error) {
        showToast("ส่งข้อความไม่สำเร็จ โปรดลองใหม่", "error");
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return (
    <section data-aos="fade-up" className="container-box">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1 className="title-header-box">{t("contactTitle")}</h1>
          <p>{t("contactp")}</p>

          <div className=" mx-auto mt-6 p-6 bg-white rounded-md shadow-md">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="name"
                label={t("name")}
                rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
                className="uppercase font-medium"
              >
                <Input placeholder={t("name")} />
              </Form.Item>

              <Form.Item
                name="email"
                label={t("email")}
                rules={[
                  { required: true, type: "email", message: "อีเมลไม่ถูกต้อง" },
                ]}
                className="uppercase font-medium"
              >
                <Input placeholder="you@example.com" />
              </Form.Item>

              <Form.Item
                name="message"
                label={t("detail")}
                rules={[{ required: true, message: "กรุณากรอกข้อความ" }]}
                className="uppercase font-medium"
              >
                <Input.TextArea rows={4} placeholder={t("detail")} />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{
                    background: "#000",
                    borderColor: "#000",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#333")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#000")
                  }
                >
                  {t("send") || "ส่งข้อมูล"}
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-10">
            <Image
              preview={false}
              src="/me/IMG_1448.jpg"
              width={200}
              height={200}
              className="object-cover rounded-md shadow-md"
              alt="Contact"
            />

            <div className="border-l-4 border-black px-8 py-4 flex flex-col gap-4 justify-center">
              <div className="flex items-center gap-2">
                <FaLocationDot size={20} />
                <span>{t("locat")}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt size={20} />
                <span>{t("phone")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail size={20} />
                <span>{t("showmail")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
