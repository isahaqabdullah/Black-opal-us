import { Mail, Phone } from 'lucide-react';
import type { OfficeEntry } from '../content/siteContent';
import { formatPhoneNumbers } from '../utils/phone';

export function OfficeContactLinks({ office }: { office: OfficeEntry }) {
  const phones = formatPhoneNumbers(office.phone);

  if (!phones.length && !office.email) {
    return null;
  }

  return (
    <div className="mt-4 space-y-2">
      {phones.map((phone) => (
        <a
          key={phone.href}
          href={phone.href}
          className="flex items-center gap-2 text-[#b8ab8b] transition-colors hover:text-[#f2d78b]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
        >
          <Phone size={14} aria-hidden="true" className="shrink-0 text-[#b8ab8b]" />
          <span className="text-[13px] leading-[1.5]">{phone.display}</span>
        </a>
      ))}
      {office.email ? (
        <a
          href={`mailto:${office.email}`}
          className="flex items-center gap-2 text-[#b8ab8b] transition-colors hover:text-[#f2d78b]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
        >
          <Mail size={14} aria-hidden="true" className="shrink-0 text-[#b8ab8b]" />
          <span className="whitespace-nowrap text-[12px] leading-[1.5]">{office.email}</span>
        </a>
      ) : null}
    </div>
  );
}
