import React from 'react';
import SectionTitle from './ui/SectionTitle';

export default function Projects() {
    return (
        <section>
            <SectionTitle text={'Projects'} />
            <ul>
                <li>
                    <div>
                        썸네일이미지
                    </div>
                    <div>
                        <div>
                            <strong>프로젝트명</strong>
                            <span>10.2022 - 12.2023</span>
                            <p>설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 </p>
                        </div>
                        <dl>
                            <dt>Stack</dt>
                            <dd>
                                <ul>
                                    <li>JS</li>
                                    <li>HTML5</li>
                                    <li>SCSS</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </li>
            </ul>
        </section>
    );
}

