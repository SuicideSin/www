<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:ml="http://www.metalinker.org/">
<xsl:output method="xml" encoding="utf-8" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"/>
<xsl:template match="/ml:metalink">
<html>
	<head>
		<title><xsl:value-of select="//ml:files/ml:file[1]/@name"/> metalink</title>
		<style type="text/css"><![CDATA[
		body {
			font-family: sans-serif;
		}
		]]>
		</style>
	</head>
	<body>
		<h1>Download <tt><xsl:value-of select="//ml:files/ml:file[1]/@name"/></tt></h1>
		<h2>Download mirrors</h2>
		<ul>
			<xsl:apply-templates select="//ml:file[1]//ml:url"/>
		</ul>
		<xsl:if test="//ml:file[1]/ml:verification">
			<h2>Checksums</h2>
			<p>You can use these checksums to verify if you have downloaded the
				file correctly.</p>
			<dl>
				<xsl:apply-templates select="//ml:file[1]/ml:verification/ml:hash"/>
			</dl>
		</xsl:if>
	</body>
</html>
</xsl:template>
<xsl:template match="ml:url">
	<li>
		<a>
			<xsl:attribute name="href"><xsl:value-of select="."/></xsl:attribute>
			<xsl:value-of select="."/>
		</a>
	</li>
</xsl:template>
<xsl:template match="ml:hash">
	<dt><xsl:value-of select="@type"/></dt>
	<dd><tt><xsl:value-of select="."/></tt></dd>
</xsl:template>
</xsl:stylesheet>
