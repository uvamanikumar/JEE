import { Given as Step } from '@wdio/cucumber-framework';
import { ChainablePromiseElement } from 'webdriverio/build/types';
export type Element = ChainablePromiseElement<Promise<WebdriverIO.Element>> | ChainablePromiseElement<WebdriverIO.Element>;
export { Step };

export async function launchPage(url: string) {
    await browser.url(url);
    await browser.pause(5000);
}

export async function clickElement(element:Element) {
 await element.click()
}

export async function pause(ms: number) {
    return await browser.pause(ms);
}
