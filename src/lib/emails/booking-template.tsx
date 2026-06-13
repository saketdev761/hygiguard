interface BookingEmailProps {
  name: string;
  phone: string;
  location: string;
  service: string;
  message: string;
  whatsapp: string;
}

export function bookingEmailTemplate({
  name,
  phone,
  location,
  service,
  message,
  whatsapp,
}: BookingEmailProps) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family: 'Segoe UI', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:24px 0;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 16px rgba(11,79,138,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, #0B4F8A 0%, #1677D2 100%); padding:32px 24px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:700; letter-spacing:0.5px;">
                HygiGuard Solutions
              </h1>
              <p style="margin:6px 0 0; color:#cfe6ff; font-size:13px;">
                New Service Booking Request
              </p>
            </td>
          </tr>

          <!-- Accent strip -->
          <tr>
            <td style="height:4px; background:linear-gradient(90deg, #1F8B45 0%, #24C467 100%);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 24px;">
              <p style="margin:0 0 20px; font-size:15px; color:#333333;">
                You've received a new booking request through the website contact form. Details below:
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate; border-spacing:0 10px;">
                <tr>
                  <td style="width:120px; vertical-align:top; padding:12px 14px; background:#f0f6fc; border-radius:8px 0 0 8px; font-size:13px; font-weight:600; color:#0B4F8A;">
                    Name
                  </td>
                  <td style="vertical-align:top; padding:12px 14px; background:#f8fbff; border-radius:0 8px 8px 0; font-size:14px; color:#222222;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="width:120px; vertical-align:top; padding:12px 14px; background:#f0f6fc; border-radius:8px 0 0 8px; font-size:13px; font-weight:600; color:#0B4F8A;">
                    Phone
                  </td>
                  <td style="vertical-align:top; padding:12px 14px; background:#f8fbff; border-radius:0 8px 8px 0; font-size:14px; color:#222222;">
                    ${phone}
                  </td>
                </tr>
                <tr>
                  <td style="width:120px; vertical-align:top; padding:12px 14px; background:#f0f6fc; border-radius:8px 0 0 8px; font-size:13px; font-weight:600; color:#0B4F8A;">
                    Location
                  </td>
                  <td style="vertical-align:top; padding:12px 14px; background:#f8fbff; border-radius:0 8px 8px 0; font-size:14px; color:#222222;">
                    ${location}
                  </td>
                </tr>
                <tr>
                  <td style="width:120px; vertical-align:top; padding:12px 14px; background:#f0f6fc; border-radius:8px 0 0 8px; font-size:13px; font-weight:600; color:#0B4F8A;">
                    Service
                  </td>
                  <td style="vertical-align:top; padding:12px 14px; background:#f8fbff; border-radius:0 8px 8px 0; font-size:14px; color:#222222;">
                    <span style="display:inline-block; background:#1F8B45; color:#ffffff; padding:4px 10px; border-radius:6px; font-size:12px; font-weight:600;">
                      ${service}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Message box -->
              <div style="margin-top:20px;">
                <p style="margin:0 0 8px; font-size:13px; font-weight:600; color:#0B4F8A;">Message</p>
                <div style="padding:14px 16px; background:#f8fbff; border-left:4px solid #24C467; border-radius:8px; font-size:14px; color:#333333; line-height:1.5;">
                  ${message || 'No additional message'}
                </div>
              </div>

              <!-- CTA -->
              <div style="margin-top:28px; text-align:center;">
                <a href="https://wa.me/${whatsapp}" style="display:inline-block; background:#1F8B45; color:#ffffff; text-decoration:none; padding:12px 28px; border-radius:8px; font-size:14px; font-weight:600; box-shadow:0 4px 10px rgba(31,139,69,0.25);">
                  Reply on WhatsApp
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0B4F8A; padding:18px 24px; text-align:center;">
              <p style="margin:0; color:#cfe6ff; font-size:12px;">
                This is an automated notification from hygiguardsolutions.com
              </p>
              <p style="margin:6px 0 0; color:#8fb8e0; font-size:11px;">
                &copy; 2026 HygiGuard Solutions. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
